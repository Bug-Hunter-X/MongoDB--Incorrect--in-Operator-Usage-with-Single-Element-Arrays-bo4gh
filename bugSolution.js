```javascript
// Correct way to query with a single value
db.collection.find({ field: "value" });
// Or, using the $eq operator for clarity
db.collection.find({ field: { $eq: "value" } });
```