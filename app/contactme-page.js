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
        
        const page = args.object.page;

        page.getViewById('NameFirst').text = '';
        page.getViewById('NameLast').text = '';
        page.getViewById('Email').text = '';
        page.getViewById('PhoneNumber').text = '';
        page.getViewById('ContactMessage').text = '';


        page.getViewById('SubmissionSuccessful').text = 'Form was Submitted Successfully. Thank you!';
        }

       

