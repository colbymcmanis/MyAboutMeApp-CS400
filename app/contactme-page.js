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

export function onSkillsButtonTap(args) {
      const button = args.object;
      const page = button.page;
      page.frame.navigate("skills-page.xml");
      }

    export function onSubmitButtonTap(args) {
        const button = args.object;
        const page = button.page;
        page.frame.navigate("skills-page.xml");

        page.getViewById('SubmissionSuccessful').text = "Form was Submitted Successfully. Colby will reach out to you as soon as possible. Thank you!"
        }
