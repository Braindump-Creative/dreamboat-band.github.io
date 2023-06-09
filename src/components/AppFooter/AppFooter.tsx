import React from 'react';
import Container from '../common/Container/Container';
import { ReactComponent as InstagramLogo } from '../assets/instagram.svg'

const AppFooter: React.FC<{}> = () => {
  return (
    <footer className="bg-gray-100 dark:bg-body border-t border-gray-200 dark:border-gray-100/20">
      <div className="py-2 bg-gray-200 dark:bg-[rgb(10,16,29)]">
          <Container>
              <div className="flex justify-between items-center gap-5 text-gray-600 dark:text-gray-300">
                  <div className="">
                      &copy; {new Date().getFullYear()} All Rights Reserved. Designed by <span className="text-primary">Braindump Creative</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <a target="_blank" href="https://instagram.com/dreamboattunes" className="transition hover:!text-primary">
                        <InstagramLogo />
                    </a>
                  </div>
              </div>
            </Container>
        </div>
    </footer>
  );
}

export default AppFooter;
