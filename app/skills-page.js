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


    