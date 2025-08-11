import React, { useState } from 'react';
import { View, Pressable, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { IconButton, Switch, Text, useTheme } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

const GearMenuModal = ({ darkMode, setDarkMode }) => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  const current = route.name;

  const navItems = [
    { label: '🧮 Calculator', target: 'Home' },
    { label: 'ℹ️ Information', target: 'Information' },
    { label: '📜 Privacy Policy', target: 'PrivacyPolicy' },
  ];

  const filteredItems = navItems.filter(item => item.target !== current);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.container}>
      <IconButton icon="cog" onPress={openMenu} size={20} /> {/* Shrunk from default 24 */}

      <Modal
        isVisible={visible}
        onBackdropPress={closeMenu}
        backdropOpacity={0.3}
        animationIn="fadeIn"
        animationOut="fadeOut"
        style={styles.modal}
        useNativeDriver
      >
        <View style={[styles.menuCard, { backgroundColor: theme.colors.surface }]}>
          {/* Theme toggle */}
          <View style={styles.toggleRow}>
            <Text style={styles.toggleLabel}>Dark Mode</Text>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>

          {/* Navigation links */}
          {filteredItems.map(({ label, target }) => (
            <Pressable
              key={target}
              onPress={() => {
                closeMenu();
                navigation.navigate(target);
              }}
              style={styles.navItem}
            >
              <Text style={styles.navText}>{label}</Text>
            </Pressable>
          ))}
        </View>
      </Modal>
    </View>
  );
};

export default GearMenuModal;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    paddingRight: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#000', // solid black
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  menuCard: {
    marginTop: 40,
    marginRight: 8,
    borderRadius: 8,
    padding: 12,
    elevation: 4,
    width: width * 0.6,
    borderWidth: 1,
    borderColor: '#000', // solid black
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // slightly reduced
    paddingVertical: 4, // added for consistency
  },
  toggleLabel: {
    marginRight: 8,
    fontSize: 14, // slightly smaller
  },
  navItem: {
    paddingVertical: 6, // reduced from 8
  },
  navText: {
    fontSize: 15, // reduced from 16
  },
});