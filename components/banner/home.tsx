import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import { PieChart } from "react-native-gifted-charts";

const HomeBanner: React.FC = () => {

    const widthAndHeight: number = 50;

  const pieData = [
    {
      value: 150,
      color: colors.secondary,
      text: "22,1",
      focused: true,
      
    },
    { value: 430, color: colors.white },
  ];

  return (

          <View style={styles.banner}>
            <ImageBackground
              resizeMode="cover"
              style={styles.bannerDots}
              source={require("../../assets/images/dashboard/banner-dots.png")}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingRight: "5%",
                  paddingLeft: "5%",
                }}
              >
                <View>
                  <Text
                    style={{
                      color: colors.white,
                      fontFamily: fonts.bold,
                      fontSize: 16,
                    }}
                  >
                    BMI (Body Mass Inded)
                  </Text>
                  <Text
                    style={{
                      color: colors.white,
                      fontFamily: fonts.regular,
                      fontSize: 14,
                    }}
                  >
                    You have a normal weight
                  </Text>
                  <View>
                    <Pressable
                      style={styles.bannerButton}
                      onPress={() => console.log("View more")}
                    >
                      <Text
                        style={{
                          color: colors.white,
                          fontFamily: fonts.regular,
                        }}
                      >
                        View More
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View>
                  <PieChart
                    radius={widthAndHeight}
                    showText
                    sectionAutoFocus
                    textColor={colors.white}
                    data={pieData}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
  )
}

export default HomeBanner

const styles = StyleSheet.create({

      banner: {
        marginTop: "2%",
        height: 170,
        backgroundColor: colors.brand,
        borderRadius: 17,
      },
    
      bannerDots: {
        flex: 1,
      },
    
      bannerButton: {
        marginTop: "8%",
        width: "55%",
        padding: "5%",
        borderRadius: 23,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.secondary,
      },
} as const);