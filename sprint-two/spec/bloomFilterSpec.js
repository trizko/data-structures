describe('bloomFilter', function() {
  var bloomFilter;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];

  var randomString = function(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  var generateTests = function(numberOfRuns){
    var runs = numberOfRuns || 10000;
    var falsePositives = 0;

    for(var i = 0; i < runs; i++){
      if(!bloomFilter.retrieve(randomString())){
        falsePositives++;
      }
    }

    return falsePositives/runs;
  };

  var generateRandomInserts = function(numberOfInserts){
    num = numberOfInserts || 10;

    for (var i = 0; i < num; i++){
      bloomFilter.insert(randomString());
    }
  };

  var bloomError = function(k, m, n){
      return Math.pow(1.0 - Math.pow(Math.E, ((-k * n) / m)), k);
  };

  beforeEach(function() {
    bloomFilter = new BloomFilter();
  });

  it('should have methods named "insert", and "retrieve', function() {
    expect(bloomFilter.insert).to.be.a("function");
    expect(bloomFilter.retrieve).to.be.a("function");
  });

  it('should store values that were inserted', function() {
    bloomFilter.insert('Steven');
    bloomFilter.insert('S');
    bloomFilter.insert('Sven');
    bloomFilter.insert('Sen');
    bloomFilter.insert('Seven');
    bloomFilter.insert('Stev');
    bloomFilter.insert('Steen');
    bloomFilter.insert('Steve');
    bloomFilter.insert('St');
    bloomFilter.insert('Ste');
    bloomFilter.insert('Stevem');
    bloomFilter.insert('Stevenpo');
    bloomFilter.insert('Stevenqwe');
    bloomFilter.insert('Stevenom');
    expect(bloomFilter.retrieve('Steven')).to.equal(true);
    expect(bloomFilter.retrieve('St')).to.equal(true);
    expect(bloomFilter.retrieve('Stevenom')).to.equal(true);
    expect(bloomFilter.retrieve('Stevenpo')).to.equal(true);
    expect(bloomFilter.retrieve('Stevenqwe')).to.equal(true);
    expect(bloomFilter.retrieve('Steen')).to.equal(true);
  });

  it('should not contain values that were not inserted', function() {
    bloomFilter.insert('Seagal');
    expect(bloomFilter.retrieve('Seagal')).not.to.equal(false);
    expect(bloomFilter.retrieve('Steven')).to.equal(false);
    expect(bloomFilter.retrieve('St')).to.equal(false);
    expect(bloomFilter.retrieve('Stevenom')).to.equal(false);
    expect(bloomFilter.retrieve('Stevenpo')).to.equal(false);
    expect(bloomFilter.retrieve('Stevenqwe')).to.equal(false);
    expect(bloomFilter.retrieve('Steen')).to.equal(false);
  });

  it('should compare the empirical rate to approximation rate of bloom filters', function() {
    var n = 10;
    var m = 18;
    var k = 3;
    var runs = 10000;
    generateRandomInserts(n);
    generateTests(runs);
    expect(generateTests()).to.be.equal(bloomError(k, m, n));
  });


});
