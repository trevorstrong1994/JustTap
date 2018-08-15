package com.justtap;

import android.app.Application;

import com.facebook.react.ReactApplication;
import fr.snapp.imagebase64.RNImgToBase64Package;
import org.reactnative.camera.RNCameraPackage;
import co.apptailor.googlesignin.RNGoogleSigninPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import io.invertase.firebase.RNFirebasePackage;
import com.amazonaws.RNAWSCognitoPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import io.invertase.firebase.auth.RNFirebaseAuthPackage; // Firebase Auth
import io.invertase.firebase.storage.RNFirebaseStoragePackage; // Firebase Storage
import io.invertase.firebase.database.RNFirebaseDatabasePackage; // Firebase Database

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNImgToBase64Package(),
            new RNFirebasePackage(),
            new RNCameraPackage(),
            new RNGoogleSigninPackage(),
            new RNFetchBlobPackage(),
            new RNAWSCognitoPackage(),
              new RNFirebaseAuthPackage(),
              new RNFirebaseStoragePackage(),
              new RNFirebaseDatabasePackage()

              );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
