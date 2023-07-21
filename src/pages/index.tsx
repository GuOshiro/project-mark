import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import { Layout } from "@/components";
import Onboarding from "@/containers/onboarding";

const Page: NextPageWithLayout = () => {
return <Onboarding />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
