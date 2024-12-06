import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-foreground border-t mt-24 shadow-sm text-xs dark:border-gray-800 dark:bg-background  py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Morshedul Munna. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="#" className="  mx-2">
            Privacy Policy
          </a>
          <a href="#" className="  mx-2">
            Terms of Service
          </a>
          <a href="#" className="  mx-2">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
