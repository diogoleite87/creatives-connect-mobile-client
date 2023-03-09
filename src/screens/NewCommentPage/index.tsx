import { useState } from "react"
import { ButtonBack } from "../../components/ButtonBack"
import { ButtonEditSubmit, Container, ContentBody, ContentFooter, ContentHeader, TextButton } from "./styles"
import { Input } from "../../components/Input"
import { ButtonConnect } from "../../components/ButtonConnect"
import { Connect } from "../../schemas/Models"
import { gql, useMutation } from "@apollo/client"
import { useAuth } from "../../hooks/useAuth"

interface propsNewCommentPage {
    route?: {
        params: {
            connect: {
                connect: Connect
            }
        }
    }
}

const NewCommentPage: React.FC<propsNewCommentPage> = ({ route }) => {

    const [comment, setComment] = useState<string>('')
    const { authData } = useAuth()

    const submit = async () => {
        console.log({
            variables: {
                username: authData?.userName!,
                postId: route?.params.connect.connect.id!,
                commentInput: { text: comment }
            }
        })
        await submitComment({
            variables: {
                username: authData?.userName!,
                postId: route?.params.connect.connect.id!,
                commentInput: { text: comment }
            }
        })
    }

    const [submitComment, { data, error, loading }] = useMutation(gql`
        mutation comment(
            $username: String!
            $postId: String!
            $commentInput: CommentInput!
        ) {
            comment(username: $username, postId: $postId, commentInput: $commentInput) {
             id
             text
             createdAt
            }
        }
    `, {
        onCompleted(data, clientOptions) {
            console.log("teste", data)
        },
    })
    return (
        <Container>
            <ContentHeader>
                <ButtonBack />
            </ContentHeader>
            <ContentBody>
                <Input
                    placeholder='Comentário'
                    onChangeText={(text: string) => setComment(text)}
                />
                <ButtonEditSubmit onPress={submit}>
                    <TextButton>
                        Comentar
                    </TextButton>
                </ButtonEditSubmit>
            </ContentBody>
            <ContentFooter>
                <ButtonConnect />
            </ContentFooter>
        </Container>
    )
}

export { NewCommentPage }