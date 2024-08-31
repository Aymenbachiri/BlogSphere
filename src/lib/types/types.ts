export type MobileNavbarLinkProps = {
  link: {
    href: string;
    label: string;
  };
};

export type AuthBtnProps = {
  loading: boolean;
  captcha: boolean;
};

export type RecaptchaBtnProps = {
  onChange: ((token: string | null) => void) | undefined;
};
