import { useNavigation } from "@react-navigation/native"
import React, { useRef, useState } from "react"

import { Input } from "../../components/Input"

import {
  ButtonSubmit,
  Container,
  ContentBody,
  ContentFooter,
  ContentHeader,
  RegisterView,
  Subtitle,
  TextButtonSubmit,
  TextError,
  TextRegister,
  TextRegisterButton,
  Title
} from "./styles"

import { useAuth } from "../../hooks/useAuth"

const Login: React.FC = () => {
  const navigation = useNavigation()

  const passwordRef = useRef<any>()

  const { signIn } = useAuth()

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<boolean>(false)

  return (
    <Container>
      <ContentHeader>
        <Title>Creatives Connect</Title>
        <Subtitle>Que bom ter você de volta aqui!</Subtitle>
      </ContentHeader>

      <ContentBody>
        {error ? (
          <TextError>
            Error ao efetuar o login, verifique os campus e tente novamente
          </TextError>
        ) : null}

        <Input
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text: string) => setEmail(text)}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          inputRef={passwordRef}
          placeholder="Senha"
          secureTextEntry
          onChangeText={(text: string) => setPassword(text)}
          returnKeyType="done"
          onSubmitEditing={() => signIn({ email, password })}
        />
      </ContentBody>

      <ContentFooter>
        <RegisterView>
          <TextRegister>Ainda não tem uma conta?</TextRegister>
          <TextRegisterButton
            onPress={() => navigation.navigate("Register" as never)}
          >
            Cadastrar
          </TextRegisterButton>
        </RegisterView>

        <ButtonSubmit onPress={() => signIn({ email, password })}>
          <TextButtonSubmit>Entrar</TextButtonSubmit>
        </ButtonSubmit>
      </ContentFooter>
    </Container>
  )
}

export { Login }
