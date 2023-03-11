import React, { useRef, useState } from "react"

import { Input } from "../../components/Input"

import { useNavigation } from "@react-navigation/native"
import { ButtonBack } from "../../components/ButtonBack"
import { InputImage } from "../../components/InputImage"
import {
  Button,
  Container,
  Content,
  Header,
  ProfileImg,
  RegisterView,
  Subtitle,
  SubtitleRegister,
  TextButton,
  TextError,
  TextRegister,
  TextRegisterButton,
  TextSuccess,
  Title,
  View
} from "./styles"

import { gql, useMutation } from "@apollo/client"
import ImagemProfileNull from "../../../assets/imageProfileNull.png"
import { Loading } from "../../components/Loading"

const CREATE_USER = gql`
  mutation createUser($userInput: CreateUserInput!) {
    createUser(userInput: $userInput) {
      username
    }
  }
`

const Register: React.FC = () => {
  const navigation = useNavigation()

  const passwordRef = useRef<any>()
  const userRef = useRef<any>()
  const cityRef = useRef<any>()

  const [name, setName] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [userName, setUserName] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [image, setImage] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const [createUser, { loading }] = useMutation(CREATE_USER, {
    onCompleted() {
      navigation.navigate("Login" as never)
    }
  })

  const submit = async () => {
    await createUser({
      variables: {
        userInput: {
          username: userName,
          password: password,
          name: name,
          city: city,
          birthday: Date.now(),
          biography: ''
        }
      }
    })
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header>
        <ButtonBack />
        <Title>Creatives Connect</Title>
        <Subtitle>Um lugar onde mentes criativas podem se comunicar.</Subtitle>
        <SubtitleRegister>Faça seu cadastro!</SubtitleRegister>
      </Header>

      <Content>
        {error ? (
          <TextError>{errorMessage}</TextError>
        ) : success ? (
          <TextSuccess>
            Cadastro efetuado com sucesso, volte a tela de login para entrar!"
          </TextSuccess>
        ) : null}

        {image ? (
          <ProfileImg source={{ uri: image }} />
        ) : (
          <ProfileImg source={ImagemProfileNull} />
        )}
        <InputImage setImage={setImage} />
        <Input
          placeholder="Nome"
          keyboardType="default"
          onChangeText={(text: string) => setName(text)}
          returnKeyType="next"
          onSubmitEditing={() => userRef.current.focus()}
        />
        <Input
          inputRef={userRef}
          placeholder="Nome de Usuario"
          keyboardType="default"
          onChangeText={(text: string) => setUserName(text)}
          returnKeyType="next"
          onSubmitEditing={() => cityRef.current.focus()}
        />
        <Input
          inputRef={cityRef}
          placeholder="Cidade"
          keyboardType="default"
          onChangeText={(text: string) => setCity(text)}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          inputRef={passwordRef}
          placeholder="Senha"
          secureTextEntry
          onChangeText={(text: string) => setPassword(text)}
          returnKeyType="next"
        />
      </Content>

      <View>
        <RegisterView>
          <TextRegister>Já possui uma conta?</TextRegister>
          <TextRegisterButton
            onPress={() => navigation.navigate("Login" as never)}
          >
            Entrar
          </TextRegisterButton>
        </RegisterView>

        <Button onPress={submit} disabled={loading}>
          {loading ? <Loading /> : <TextButton>Cadastrar</TextButton>}
        </Button>
      </View>
    </Container>
  )
}

export { Register }
