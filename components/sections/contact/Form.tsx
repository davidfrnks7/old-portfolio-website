import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  HStack,
  Textarea,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import EmojiValidate from "./EmojiValidate";

const ContactFrom = (): JSX.Element => {
  const validateName = (inputName: string | undefined): string | undefined => {
    let nameError;

    if (!inputName) {
      nameError = "A name is required.";
    } else if (/[\\d]/gi.test(inputName)) {
      nameError = "Only words and spaces are allowed in this field.";
    }

    return nameError;
  };

  const validateEmail = (
    inputEmail: string | undefined
  ): string | undefined => {
    let emailError;

    if (!inputEmail) {
      emailError = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(inputEmail)) {
      emailError = "Invalid email format.";
    }

    return emailError;
  };

  const validateMessage = (
    inputMessage: string | undefined
  ): string | undefined => {
    let messageError;

    if (!inputMessage) {
      messageError = "A message is required.";
    }

    return messageError;
  };

  const validateSubject = (
    inputLine: string | undefined
  ): string | undefined => {
    let subjectError;
    const subject = "Portfolio Website Contact | " + inputLine;

    if (!inputLine) {
      subjectError = "A subject is required.";
    } else if (subject.length > 250) {
      subjectError = "Subject too long";
    }

    return subjectError;
  };

  const handleSubmit = (input: unknown): void => {
    console.info(input);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form>
          <VStack h="auto" w="100%" spacing={6}>
            <Heading as="h4" size="md">
              Required fields indicated with <EmojiValidate type="Required" />
            </Heading>
            <HStack h="auto" w="100%" alignItems="flex-start" spacing={8}>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input {...field} id="name" placeholder="David Franks" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email" validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      {...field}
                      id="email"
                      placeholder="me@davidfrnks7.dev"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </HStack>
            <Field name="subject" validate={validateSubject}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.subject && form.touched.subject}
                >
                  <HStack
                    h="auto"
                    w="auto"
                    spacing={0}
                    alignItems="flex-start"
                  >
                    <FormLabel mr={2} htmlFor="subject">Subject</FormLabel>
                    {form.errors.subject && form.touched.subject &&
                      <span role="img" aria-label="X">❌</span>
                    }
                  </HStack>
                  <Input
                    {...field}
                    id="subject"
                    placeholder="I am interested in..."
                  />
                  <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="message" validate={validateMessage}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.message && form.touched.message}
                >
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea
                    {...field}
                    id="message"
                    rows={4}
                    placeholder="I like your portfolio website and your list and stills and would like to discuss..."
                  />
                  <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default ContactFrom;
