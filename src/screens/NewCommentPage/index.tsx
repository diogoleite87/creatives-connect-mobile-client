import { gql, useMutation } from "@apollo/client"
import { useState } from "react"
import { ButtonBack } from "../../components/ButtonBack"
import { ButtonConnect } from "../../components/ButtonConnect"
import { Input } from "../../components/Input"
import { useAuth } from "../../hooks/useAuth"
import { Connect } from "../../schemas/Models"
import {
  ButtonEditSubmit,
  Container,
  ContentBody,
  ContentFooter,
  ContentHeader,
  TextButton
} from "./styles"
import { useNavigation } from "@react-navigation/native"
import { Loading } from "../../components/Loading"

interface propsNewCommentPage {
  route?: {
    params: {
      connect: {
        connect: Connect
      }
    }
  }
}

const MAKE_COMMENT = gql`
  mutation comment(
    $username: String!
    $postId: String!
    $commentInput: CommentInput!
  ) {
    comment(username: $username, postId: $postId, commentInput: $commentInput) {
      id
      text
      created_at
      owner {
        name
        username
        picture
      }
    }
  }
`

const NewCommentPage: React.FC<propsNewCommentPage> = ({ route }) => {
  const [comment, setComment] = useState<string>("")
  const { authData } = useAuth()

  const navigate = useNavigation()

  const submit = async () => {
    await submitComment({
      variables: {
        username: authData?.userName!,
        postId: route?.params.connect.connect.id!,
        commentInput: { text: comment }
      }
    })
  }

  const [submitComment, { loading }] = useMutation(MAKE_COMMENT, {
    onCompleted(data) {
      navigate.navigate('Home' as never)
    }
  })
  return (
    <Container>
      <ContentHeader>
        <ButtonBack />
      </ContentHeader>
      <ContentBody>
        <Input
          placeholder="Comentário"
          onChangeText={(text: string) => setComment(text)}
        />
        <ButtonEditSubmit onPress={submit} disabled={loading}>
          {loading ? <Loading /> : <TextButton>Comentar</TextButton>}
        </ButtonEditSubmit>
      </ContentBody>
      <ContentFooter>
        <ButtonConnect />
      </ContentFooter>
    </Container>
  )
}

export { NewCommentPage }
