const express = require('express');

const router = express.Router();

/**
 * Load MongoDB models.
 */

/**
 * @route /user/forgot-password
 * @method GET
 * @description Displays landing page or
 *  users uploads if they are logged inn
 * @access Public/Private
 */
router.get('/forgot-password', (req, res) => {
  res.render('auth/forgot-password', {
    pageTitle: 'Recover password',
    pageDesc:
      'Forgot your password? No problem - you can reset your password on this page.',
    pageName: 'forgotPassword'
  });
});

/**
 * @route /user/reset-password
 * @method GET
 * @description Displays landing page or
 *  users uploads if they are logged inn
 * @access Public/Private
 */
router.get('/reset-password', (req, res) => {
  res.render('auth/reset-password', {
    pageTitle: 'Recover your password',
    pageDesc: 'Reset your password and get access to your ccount',
    pageName: 'forgotPassword'
  });
});

module.exports = router;
