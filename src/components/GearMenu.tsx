import React, { useState } from 'react';
import { View } from 'react-native';
import { Menu, IconButton, Switch, Text } from 'react-native-paper';

const GearMenu = ({ darkMode, setDarkMode }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <IconButton icon="cog" onPress={openMenu} />
        }
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
          <Text>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>
      </Menu>
    </View>
  );
};

export default GearMenu;