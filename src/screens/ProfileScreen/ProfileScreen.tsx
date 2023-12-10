import { View } from "react-native";
import ProfilePhoto from "@app/components/Profile/ProfilePhoto/ProfilePhoto";

import defaultStyles from './styles';
import ProfileTextContainer, {
  ProfileTextContainerProps
} from "@app/components/Profile/ProfileTextContainer/ProfileTextContainer";

function ProfileScreen() {
  const styles = defaultStyles();

  const textContainers: ProfileTextContainerProps[] = [
    { title: 'Освітній ступінь', description: 'Бакалавр' },
    { title: 'Факультет', description: 'Факультет інформаційних технологій і систем' },
    { title: 'Спеціальність', description: '122 - Компютерні науки' },
    { title: 'Освітня програма', description: 'Компютерні науки' },
    { title: 'Хобі', description: 'Програмування, спорт, вивчати нове' },
  ];

  return (
    <>
      <View style={styles.root}>
        <ProfilePhoto />
        <View style={styles.textContainers}>
          {textContainers.map((textContainer, index) => <ProfileTextContainer
            key={index}
            title={textContainer.title}
            description={textContainer.description}
          />)}
        </View>
      </View>
    </>
  )
}

export default ProfileScreen;
