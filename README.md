# rn-practice ( React Native setup)

    date -> march 3, 2024
    rn version -> 0.73
    node version -> 18.12.1

    packages using ->
      husky, eslint, prettier
      react-navigation
        - for building stacks and tabs and navigating through different screens
      react-native-magnus
        - utility css framework
      react-native-vector-icons
        - if using icons -> can use ( heavy ) better to use .svg
      zustand ( can switch ) - [ recoil, redux ]
        - global state management
      react-native-async-storage ( can use secure storage )
        - persistant storage ( using storage iside of phone 2mb usually )
      react-native-firebase ( firestore, storage, auth, messaging )
        - for authentication , storage for file upload, firestore for nosql db if needed, message for push notfication

    folder structure
      /root*/
        ...
        tsconfig.ts
        package.json
        index.js <- app entry point ( call AppRegistry )
        /source/
          app.tsx <- holds all our code
          /assets/ <- holds all asset files i.e. -> pictures, icons,
            /images/
            /icons/
          /constants/ <- will hold typescript files holding enums for constants strings that do not change
            /
          /components/ <- building blocks
            /atoms/ <- primitives
            /molecules/ <- more than 1 primitive components i.e. -> <View><Image/><Text>example</Text></View>
            /organisms/ <- more than 1 molecule comonents
            /templates/ <-
          /navigators/ <- holds navigation of application -> bottom tabs, or stacks
            <navigator.tsx>
            /tabs/
            /stacks/
            /routes/
          /screens/ <- screens that go inside the navigators
            /screen/
              /children/ <- small screen specific components
              <screen>.tsx
          /config/ <- holds configurations of app like language or color mode, server settings
            <app-config.json> <- holds the constants of settings ->
                                *try to hold source of truth of app to as  few files as possible*
            config.ts <- control app-config file through here. and async storage control layer here too.
          /services/ <- all api calls here
            /api <- make api client wrapper
            /queries <- for use with react-query and calling server
          /stores/
            /modules/
          /utilities/ <- utility function of application -> little toolbox
            /helpers/
            /async-storage/

### sources

    - for atomic pattern in react-native ( folder structure )
      [https://medium.com/@prathiba2796/react-native-best-practices-for-organizing-code-with-atomic-folder-structure-131858653eb1]
