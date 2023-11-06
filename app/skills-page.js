


const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;


exports.pageLoaded = function(args) {
  const page = args.object;
  const listView = page.getViewById("myListView");

  const itemList = new ObservableArray([
  { name: 'Item 1' },
  { name: 'Item 2' },
  // ...
]);
listView.items = itemList;
};


exports.onHomePageButtonTap = function (args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("main-page.xml");
  };

exports.onAboutMeButtonTap = function (args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("Aboutme-page.xml");
    };

exports.onContactMeButtonTap = function (args) {
      const button = args.object;
      const page = button.page;
      page.frame.navigate("contactme-page.xml");
      };
