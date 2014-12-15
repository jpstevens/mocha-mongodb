require('./helpers');

describe('Mocha MongoDB', function () {
  describe('by default', function () {
    db.connect('mongodb://localhost/mocha-mongodb');
    db.dropDb();
    describe('when the host exists', function () {
      describe('when using #add', function () {
        db.add('users', {
          firstName: 'Tom',
          lastName: 'Jones'
        });
        it('contains the user', function (done) {
          this.db.collection('users')
          .find({ firstName: 'Tom'}).toArray(function (err, users) {
            expect(users.length).to.equal(1);
            done();
          });
        });
      });
      describe('#remove', function () {
        db.add('users', {
          firstName: 'Sam',
          lastName: 'Smith'
        });
        db.remove('users', { firstName: 'Sam' });
        it('return an empty object', function (done) {
          this.db.collection('users')
          .find({ firstName: 'Sam'}).toArray(function (err, users) {
            expect(users.length).to.equal(0);
            done();
          });
        });
      });
    });
  });
  describe('using `mongodb`', function () {
    db.connect('mongodb://localhost/mocha-mongodb', { lib: 'mongodb' });
    db.dropDb();
    describe('when the host exists', function () {
      describe('when using #add', function () {
        db.add('users', {
          firstName: 'Tom',
          lastName: 'Jones'
        });
        it('contains the user', function (done) {
          this.db.collection('users')
          .find({ firstName: 'Tom'}).toArray(function (err, users) {
            expect(users.length).to.equal(1);
            done();
          });
        });
      });
      describe('#remove', function () {
        db.add('users', {
          firstName: 'Sam',
          lastName: 'Smith'
        });
        db.remove('users', { firstName: 'Sam' });
        it('return an empty object', function (done) {
          this.db.collection('users')
          .find({ firstName: 'Sam'}).toArray(function (err, users) {
            expect(users.length).to.equal(0);
            done();
          });
        });
      });
    });
  });
  describe('using `mongojs`', function () {
    db.connect('mongodb://localhost/mocha-mongodb', { lib: 'mongojs' });
    db.dropDb();
    describe('when the host exists', function () {
      describe('when using #add', function () {
        db.add('users', {
          firstName: 'Tom',
          lastName: 'Jones'
        });
        it('contains the user', function (done) {
          this.db.collection('users').find({ firstName: 'Tom' }, function (err, users) {
            expect(users.length).to.equal(1);
            done();
          });
        });
      });
      describe('#remove', function () {
        db.add('users', {
          firstName: 'Sam',
          lastName: 'Smith'
        });
        db.remove('users', { firstName: 'Sam' });
        it('return an empty object', function (done) {
          this.db.collection('users').find({ firstName: 'Sam' }, function (err, users) {
            expect(users.length).to.equal(0);
            done();
          });
        });
      });
    });
  });
});
