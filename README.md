# rn-practice ( React Native setup)

    date -> march 3, 2024
    rn version -> 0.73
    node version -> 18.12.1
    package installer -> yarn

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

## 1. init project[https://reactnative.dev/docs/environment-setup] -> for mac

    - just to check to make sure -> *npm uninstall -g react-native-cli @react-native-community/cli
    - npx react-native@latest init <ProjectName>

## 2. start project

    - yarn ios or yarn android

## 3. eslint-prettier-husky-lint-staged[https://deku.posstree.com/en/react-native/eslint-prettier-husky-lint-staged/]

    - npx eslint --init
      - answer questiosn accordingly

    - for additional detailed configurations
      - yarn add -D eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks

    - modify eslintrc.js
      - module.exports = {
        env: {
          es6: true,
          node: true,
          jest: true,
        },
        extends: [
          'eslint:recommended',
          'plugin:react/recommended',
          'plugin:react-hooks/recommended',
          'plugin:@typescript-eslint/eslint-recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ],
        ...
        parserOptions: {
          project: './tsconfig.json',
          ...
        },
        plugins: ['react', 'react-hooks', '@typescript-eslint'],
        ...
        rules: {
          indent: ['error', 2, { SwitchCase: 1 }],
          quotes: ['error', 'single', { avoidEscape: true }],
          ...,
          'no-empty-function': 'off',
          '@typescript-eslint/no-empty-function': 'off',
          'react/display-name': 'off',
          'react/prop-types': 'off',
        },
        settings: {
          react: {
            version: 'detect',
          },
        },
      };

## 4. install prettier

    yarn add -D prettier eslint-plugin-prettier
    - configure prettier file
      - module.exports = {
          arrowParens: 'avoid',
          bracketSameLine: true,
          bracketSpacing: true,
          singleQuote: true,
          trailingComma: 'all',
          semi: false,
          printWidth: 100,
        }

    add prettier to rules in eslintrc.js

## 5. install husky

    yarn add -D husky lint-staged

    add in package.json
      - {

        ...
        "lint-staged": {
        "src/**/\*.{ts,tsx}": [
        "eslint --ext .tsx --ext .ts src/ --fix"
        ],
        "./src/**": [
        "prettier --write ."
        ]
        },
        "husky": {
        "hooks": {
        "pre-commit": "lint-staged"
        }
        },
        ...
        }

    RUN command -> npx husky .husky/pre-commit "npm run lint-staged"

## react-navigation[https://reactnavigation.org/] - stack, tabs, top-tab

    yarn add @react-navigation/native
    yarn add react-native-screens react-native-safe-area-context
    yarn add @react-navigation/native-stack
    yarn add @react-navigation/bottom-tabs
    yarn add @react-navigation/material-top-tabs react-native-tab-view
    yarn add react-native-pager-view

    npx pod-install ios

    add in android :
    MainActivity.kt ->
    import android.os.Bundle;

    class MainActivity: ReactActivity() {
      // ...
      override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(null)
      }
      // ...
    }

## babel-plugin-module-resolver[https://github.com/tleunen/babel-plugin-module-resolver] -> NEED TO FIX

    yarn add --dev babel-plugin-module-resolver

    babel.config.js
    {
      "plugins": [
        ["module-resolver", {
          "root": ["./src"],
          "alias": {
            "test": "./test",
            "underscore": "lodash"
          }
        }]
      ]
    }


    tsconfig.ts
    {
      "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "*": ["src/*"],
          "test/*": ["test/*"],
          "underscore": ["lodash"]
        }
      }
    }

    metro.config.js
    const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

    /**
    * Metro configuration
    * https://facebook.github.io/metro/docs/configuration
    *
    * @type {import('metro-config').MetroConfig}
    */

    const assetExts = require('metro-config/src/defaults/defaults').assetExts,
      sourceExts = require('metro-config/src/defaults/defaults').sourceExts

    const config = {
      transformer: {
        getTransformOptions: async () => ({
          transform: {
            experimentalImportSupport: false,
            inlineRequires: true,
          },
          resolver: {
            sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs'],
          },
        }),
        // babelTransformerPath: require.resolve('react-native-svg-transformer'),
      },
      resolver: {
        assetExts: assetExts.filter(ext => ext !== 'svg'),
        sourceExts: [...sourceExts, 'svg'],
      },
    }

    module.exports = mergeConfig(getDefaultConfig(__dirname), config)

    add :
      "resolutions": {
        "**/metro-file-map": "0.80.6"
      }

    to package.json

    remember to reset-cache

## react-native-firebase setup[https://rnfirebase.io/]

    - yarn add @react-native-firebase/app

     follow android setup guide
     folow is setup guide
