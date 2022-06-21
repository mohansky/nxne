import Head from "next/head";
import { Container, Button } from "react-bootstrap";
import { CMS_NAME } from "../lib/constants";
import { useRouter } from "next/router";

export default function Thankyou() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Thank You | {CMS_NAME} </title>
      </Head>
      <Container className="my-5">
        <h4 className="my-5 text-center"> 
          Thank you for your message we will get back to you as soon as
          possible. 
        </h4>
        <div className="text-center">
          <Button variant="primary" onClick={() => router.push("/")}> 
            Back to Home
          </Button>
        </div>
      </Container>
    </>
  );
}
