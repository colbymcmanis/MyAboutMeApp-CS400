import { createViewModel } from './main-view-model';

export function onAboutMeButtonTap(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("Aboutme-page.xml");
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
