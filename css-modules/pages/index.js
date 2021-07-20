import React from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";

import styles from "../styles/home.module.css";

function Page() {
  return (
    <Container className={styles.verticalSack}>
      <Card className={styles.verticalSack}>
        <Button>Button</Button>
        <Button size="sm">Button Small</Button>
        <Button size="lg">Button Large</Button>
      </Card>

      <Card className={styles.verticalSack}>
        <Button colorScheme="success">Button Success </Button>
        <Button size="sm" colorScheme="warning">
          Button Danger Small
        </Button>
        <Button size="lg" colorScheme="danger">
          Button Warning Large
        </Button>
      </Card>

      <Card className={styles.verticalSack}>
        <Button variant="outline">Button Outline</Button>
        <Button variant="outline" size="sm">
          Button Outline Small
        </Button>
        <Button variant="outline" size="lg">
          Button Outline Large
        </Button>
      </Card>

      <Card className={styles.verticalSack}>
        <Button variant="outline" colorScheme="success">
          Button Success Outline
        </Button>
        <Button variant="outline" size="sm" colorScheme="warning">
          Button Danger Outline Small
        </Button>
        <Button variant="outline" size="lg" colorScheme="danger">
          Button Warning Outline Large
        </Button>
      </Card>
    </Container>
  );
}

export default Page;
