import { createViewModel } from './main-view-model';

export function onHomePageButtonTap(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("main-page.xml");
  }

export function onAboutMeButtonTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("Aboutme-page.xml");
    }

export function onContactMeButtonTap(args) {
      const button = args.object;
      const page = button.page;
      page.frame.navigate("contactme-page.xml");
      }


const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
const listViewModule = require("@nativescript/core/ui/list-view");

exports.pageLoaded = function(args) {
    const page = args.object;
  const listView = page.getViewById("myListView");

  const itemList = new ObservableArray([
  { name: 'Item 1' },
  { name: 'Item 2' },
  // ...
]);
listView.items = itemList;
listView.itemTemplate = `<Label text="{{ name }}" />`;
}