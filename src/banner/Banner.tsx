// src/banner/Banner.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import { BANNER_UNIT_ID, AD_REQUEST_OPTIONS } from './AdMobConfig';

type BannerProps = {
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
};

export default function Banner({ size, backgroundColor = '#000000' }: BannerProps) {
  let adSize: BannerAdSize;

  if (size === 'small') adSize = BannerAdSize.BANNER;
  else if (size === 'medium') adSize = BannerAdSize.MEDIUM_RECTANGLE;
  else if (size === 'large') adSize = BannerAdSize.LEADERBOARD;
  else adSize = BannerAdSize.ANCHORED_ADAPTIVE_BANNER; // default fallback

  return (
    <View style={[styles.adContainer, { backgroundColor }]}>
      <BannerAd
        unitId={BANNER_UNIT_ID}
        size={adSize}
        requestOptions={AD_REQUEST_OPTIONS}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  adContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
});