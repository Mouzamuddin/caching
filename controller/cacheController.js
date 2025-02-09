const cache = new Map();
const MAX_CACHE_SIZE = 10;
let hits = 0;
let misses = 0;

exports.storeInCache = (req, res) => {
    const { key, value } = req.body;

    if (!key || !value) {
        return res.status(400).json({ error: 'Key and value are required.' });
    }

    if (cache.size >= MAX_CACHE_SIZE && !cache.has(key)) {
        return res.status(400).json({ error: 'Cache is full. Cannot add new key-value pair.' });
    }

    cache.set(key, value);
    res.status(200).json({ message: 'Key-value pair stored successfully.' });
};

// Retrieve value from cache
exports.getFromCache = (req, res) => {
    const key = req.params.key;

    if (!cache.has(key)) {
        misses++;
        return res.status(404).json({ error: 'Key not found in cache.' });
    }

    hits++;
    res.status(200).json({ key, value: cache.get(key) });
};

// Delete key-value pair from cache
exports.deleteFromCache = (req, res) => {
    const key = req.params.key;

    if (!cache.has(key)) {
        return res.status(404).json({ error: 'Key not found in cache.' });
    }

    cache.delete(key);
    res.status(200).json({ message: 'Key removed from cache.' });
};

// Retrieve all key-value pairs from cache
exports.getAllCache = (req, res) => {
    const allCache = Object.fromEntries(cache);
    res.status(200).json({ cache: allCache });
};

// Clear entire cache
exports.clearCache = (req, res) => {
    cache.clear();
    res.status(200).json({ message: 'Cache cleared successfully.' });
};

// Get cache statistics
exports.getCacheStats = (req, res) => {
    res.status(200).json({
        maxSize: MAX_CACHE_SIZE,
        currentSize: cache.size,
        hits,
        misses
    });
};
