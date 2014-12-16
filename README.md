# mocha-mongodb

[![Build Status](https://travis-ci.org/jpstevens/mocha-mongodb.svg)](https://travis-ci.org/jpstevens/mocha-mongodb)

MongoDB helper for Mocha. Useful for seeding data for API tests.

## Installation

```
npm install mocha-mongodb
```

## Example Usage

```javascript
var db = require('mocha-mongodb');

describe('some test', function () {
  db.connect('mongodb://localhost/test');
  db.create('users', {
    name: 'Name Goes Here'
  });
  it('works', function () {
    // test the user here
  });
});
```
## Methods

### connect(mongoUrl)

**Description**
Connect to the specified database. Runs in a "before" block.

**Example**
```
db.connect(_MONGO_URL_)` where `_MONGO_URL_` is your MongoDB database URL.
```

### create(collection, object)

**Alias**
```
add(collection, query)
```

**Description**
Create a new object in a collection. Runs in a "beforeEach" block.

**Example**
```
db.create('user', {
  firstName: 'John',
  lastName: 'Smith'
})
```

### remove(collection, query)

**Alias**
```
delete(collection, query)
```

**Description**
Remove objects from a collection. Runs in a "beforeEach" block.

**Example**
```
db.remove('user', { firstName: 'John' });`
```

## dropDb()

**Description**
Drops the current database. Runs in a "beforeEach" block.

**Example**
```
db.dropDb();
```
