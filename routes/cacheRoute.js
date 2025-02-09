const express = require('express');
const router = express.Router();
const cacheController = require('../controller/cacheController');

router.get('/cache/stats', cacheController.getCacheStats);  // Stats route
router.get('/cache', cacheController.getAllCache);         // Get all cache
router.delete('/cache', cacheController.clearCache);       // Clear cache

// Dynamic key-based routes after
router.post('/cache', cacheController.storeInCache);       // Store key-value
router.get('/cache/:key', cacheController.getFromCache);   // Get value by key
router.delete('/cache/:key', cacheController.deleteFromCache); // Delete by key


module.exports = router;