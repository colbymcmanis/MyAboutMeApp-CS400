import { createViewModel } from './main-view-model';

export function onHomePageButtonTap(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("main-page.xml");
  }

export function onSkillsButtonTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("skills-page.xml");
    }

export function onContactMeButtonTap(args) {
      const button = args.object;
      const page = button.page;
      page.frame.navigate("contactme-page.xml");
      }