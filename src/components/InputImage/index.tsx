import * as ImagePicker from "expo-image-picker"
import { ButtonEdit } from "../ButtonEdit"

interface propsInputImage {
  setImage(image: string): void
}

const InputImage: React.FC<propsInputImage> = ({ setImage }) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return <ButtonEdit onPress={pickImage} />
}

export { InputImage }
