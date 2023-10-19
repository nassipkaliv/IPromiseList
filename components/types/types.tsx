import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Loading: undefined;
  Login: undefined;
  Register: undefined;
  Start: undefined;
  Password: undefined;
  Navigation: undefined;
  Home: undefined;
  Notifications: undefined;
  Settings: undefined;
  MyPromiseToday: undefined;
  Profile: undefined;
  ProfileDetails: undefined;
  EditPromise: undefined;
  MyPromisesToday: undefined;
  MyPromisesTomorrow: undefined;
  MyPromisesWeek: undefined;
  MyPromisesMonth: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
