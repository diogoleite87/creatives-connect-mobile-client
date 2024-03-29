import { gql, useMutation, useQuery } from "@apollo/client"
import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import ImagemProfileNull from "../../../assets/imageProfileNull.png"
import { ButtonBack } from "../../components/ButtonBack"
import { Input } from "../../components/Input"
import { InputImage } from "../../components/InputImage"
import {
  FindUserByUsernameQuery,
  FindUserByUsernameQueryVariables
} from "../../generated/api-types"
import { FIND_USER_BY_USERNAME } from "../../graphql/user/queries"
import { useAuth } from "../../hooks/useAuth"
import { imageToBase64 } from "../../utils/imageToBase64"
import {
  ButtonEditSubmit,
  ButtonSignOut,
  Container,
  ContainerImg,
  ContentBody,
  ContentFooter,
  ContentHeader,
  ProfileImg,
  ProfileUser,
  TextButton
} from "./styles"
import { Loading } from "../../components/Loading"

const UPDATE_USER = gql`
  mutation updateUser($username: String!, $updatedUser: UpdateUserInput!) {
    updateUser(username: $username, updatedUser: $updatedUser) {
      username
      name
    }
  }
`

const Settings: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null | undefined>()
  const [nameUpdate, setNameUpdate] = useState<string>("")
  const [cityUpdate, setCityUpdate] = useState<string>("")
  const [biographyUpdate, setbiographyUpdate] = useState<
    string | undefined | null
  >("")
  const [password, setPassword] = useState<string>("")

  const navigation = useNavigation()

  const { signOut, authData } = useAuth()

  const { data, loading: profileLoading } = useQuery<
    FindUserByUsernameQuery,
    FindUserByUsernameQueryVariables
  >(FIND_USER_BY_USERNAME, {
    variables: { username: authData?.userName ? authData?.userName : "" },
    onCompleted(data) {
      setNameUpdate(data.findUserByUsername.name)
      setCityUpdate(data.findUserByUsername.city)
      setbiographyUpdate(data.findUserByUsername.biography)
      setProfileImage(data.findUserByUsername.picture)
    }
  })

  const [updateUser, { loading: updateUserLoading }] = useMutation(UPDATE_USER, {
    onCompleted() {
      signOut()
    }
  })

  const editProfile = async () => {
    let base64 = undefined

    if (profileImage) {
      base64 = await imageToBase64(profileImage)
    }

    updateUser({
      variables: {
        username: authData?.userName!,
        updatedUser: {
          name: nameUpdate,
          city: cityUpdate,
          biography: biographyUpdate,
          password: password,
          picture: base64
        }
      }
    })
  }

  return (
    profileLoading ? <Loading /> :
      <Container>
        <ContentHeader>
          <ButtonBack />
        </ContentHeader>
        <ContentBody>
          <ContainerImg>
            <ProfileImg
              source={
                profileImage ? { uri: profileImage } : ImagemProfileNull
              }
            />
            <InputImage setImage={setProfileImage} />
            <ProfileUser>@{data?.findUserByUsername.username}</ProfileUser>
          </ContainerImg>

          <Input
            placeholder="Nome"
            keyboardType="default"
            value={nameUpdate}
            onChangeText={(text: string) => setNameUpdate(text)}
          />
          <Input
            placeholder="Biografia"
            keyboardType="default"
            value={biographyUpdate ? biographyUpdate : ""}
            onChangeText={(text: string) => setbiographyUpdate(text)}
          />
          <Input
            placeholder="Cidade"
            keyboardType="default"
            value={cityUpdate}
            onChangeText={(text: string) => setCityUpdate(text)}
          />
        </ContentBody>
        <ContentFooter>
          <ButtonEditSubmit onPress={editProfile}>
            {updateUserLoading ? <Loading /> : <TextButton>Salvar Alterações</TextButton>}
          </ButtonEditSubmit>
          <ButtonSignOut onPress={signOut}>
            <TextButton>Sair do App</TextButton>
          </ButtonSignOut>
        </ContentFooter>
      </Container>
  )
}

export { Settings }
