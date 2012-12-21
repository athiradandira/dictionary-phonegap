package com.cntt;

import org.apache.cordova.DroidGap;

import android.os.Bundle;

public class dictionary extends DroidGap
{
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/readfile.html");
    }
}
