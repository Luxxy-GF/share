const dayjs = require('dayjs');
const sha512 = require('js-sha512');
const Session = require('../../models/Session');
const User = require('../../models/User');

module.exports = async (req, res, next) => {
  try {
    /**
     * Hash the token to check in the database if it's still valid
     */
    const refreshTokenHash = sha512(req.body.refresh_token);

    const refreshTokenValid = await Session.findOne({
      refreshTokenHash,
      expireAt: {
        $gt: dayjs()
      }
    });

    /**
     * If it's valid then move on with setting the user object  on the request.
     */
    if (refreshTokenValid) {
      const user = await User.findById(refreshTokenValid.user).select(
        '-password'
      );
      req.user = user;
      return next();
    }
    res.status(401).send('Unauthorized');
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 'SERVER_ERROR',
      error: 'Internal Server Error.'
    });
  }
};