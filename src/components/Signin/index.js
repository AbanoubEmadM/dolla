import React from 'react'
import { Container, FormWrap ,FormContent, Icon , Form , FormH1, FormLabel , FormInput , FormButton ,Text} from './style'
const Signin = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">dolla</Icon>
                <FormContent>
                    <Form action="#">
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required />
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" required />
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Signin
