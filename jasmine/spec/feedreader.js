
$(function () {
  
  describe('RSS Feeds', function () {
    
    it('are defined', function () {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    it('has urls and urls aren\'t empty', function () {
      allFeeds.forEach(obj => {
        expect(obj.url).toBeDefined();
        expect(obj.url).not.toBeFalsy();
      });
    });


    it('has names and names aren\'t empty', function () {
      allFeeds.forEach(obj => {
        expect(obj.name).toBeDefined();
        expect(obj.name).not.toBeFalsy();
      });
    });
  });


  describe('The menu', function () {
    var body,
      menuIcon;

    beforeEach(function () {
      body = document.body;
      menuIcon = $('.menu-icon-link');
    });

    it('hidden by deafult', function () {
      expect($(document.body).hasClass('menu-hidden')).toBe(true);
    });


    it('changes visibility when icon is clicked', function () {
      // First click should make the menu-hidden removed from body
      menuIcon.click();
      expect($(document.body).hasClass('menu-hidden')).toBe(false);

      // Second click should make the menu-hidden added to the body
      menuIcon.click();
      expect($(document.body).hasClass('menu-hidden')).toBe(true);
    });
  });


  //});
  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function () {
    var numberOfEntries;


    beforeEach(function (done) {
      done();
    });


    it('are loaded', function (done) {
      expect($('.feed .entry')).not.toBe(0);
      done();
    });
  });
  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function () {
    var firstLoad,
      secondLoad;
   
    
    beforeEach(function (done) {
      loadFeed(0, function () {
        firstLoad = $('.feed').html();
        loadFeed(1, function () {
          secondLoad = $('.feed').html();
          done();
        });
      });
    });

    
    it('content changes upon calling of loadFeed with different parameter', function (done) {
      expect(firstLoad).not.toEqual(secondLoad);
      done();
    });
  });
}());
