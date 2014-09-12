package com.darong.gogotrip;

import android.annotation.SuppressLint;
import android.app.AlertDialog;
import android.app.AlertDialog.Builder;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.ActionBarActivity;
import android.util.Log;
import android.view.KeyEvent;
import android.view.MenuItem;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends ActionBarActivity {
	private static final String LOG_TAG="DARONG";
	WebView mWebView;
	TextView mTextView;
	@SuppressLint("SetJavaScriptEnabled")
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		
		mTextView = (TextView)findViewById(R.id.textview);
		mWebView = (WebView) findViewById(R.id.webview);
		mWebView.getSettings().setJavaScriptEnabled(true);
		mWebView.getSettings().setBuiltInZoomControls(true);
		mWebView.getSettings().setSupportZoom(true);
		mWebView.setWebViewClient(new BlogWebViewClient());

		mWebView.loadUrl("file:///android_asset/www/Index.html");
	
		mWebView.addJavascriptInterface(new JavaScriptInterface(this), "App");
	}
	
	
	public class JavaScriptInterface {
		private Context mContext;
		private final Handler handler = new Handler();
	
		JavaScriptInterface(Context c) {
			mContext = c;
		}
		
		public void setMessage(final String arg) { // must be final
            handler.post(new Runnable() {
                public void run() {
                    Log.d("HybridApp", "setMessage("+arg+")");
                    mTextView.setText(arg);
                }
            });
        }
	
		@JavascriptInterface
		public void showToast(String toast) {
			Toast.makeText(mContext, toast, Toast.LENGTH_SHORT).show();
		}
	
		@JavascriptInterface
		public void showAlertDialog(String title, String message) {
			Builder alert = new AlertDialog.Builder(mContext);
	
			alert.setTitle(title);
			alert.setMessage(message);
	
			alert.setPositiveButton("확인", new DialogInterface.OnClickListener() {
	
				@Override
				public void onClick(DialogInterface dialog, int which) {
					
				}
			});
	
			alert.show();
		}
	
		@JavascriptInterface
		public void showProgressDialog() {
			final ProgressDialog progress = new ProgressDialog(mContext);
	
			progress.setMessage("로딩중입니다. (3초)");
			progress.setTitle("로딩중..");
			progress.setCanceledOnTouchOutside(false);
	
			progress.show();
	
			Handler handler = new Handler();
			handler.postDelayed(new Runnable() {
				public void run() {
					progress.dismiss();
				}
			}, 3 * 1000);
	
		}
	
	}
		
		
	
	
	// 기기 back 
	@Override
	public boolean onKeyDown(int keyCode, KeyEvent event) {
		if((keyCode == KeyEvent.KEYCODE_BACK) && mWebView.canGoBack()) {
			mWebView.goBack();
			return true;
		}
		return super.onKeyDown(keyCode, event);
	}
	
	// 웹뷰 내뷰 rul 인식
	 private class BlogWebViewClient extends WebViewClient {
		public boolean shouldOverrideUrlLoading(WebView view, String url){
			view.loadUrl(url);
			return true;
		}
	}
	 
	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		// Handle action bar item clicks here. The action bar will
		// automatically handle clicks on the Home/Up button, so long
		// as you specify a parent activity in AndroidManifest.xml.
		int id = item.getItemId();
		if (id == R.id.action_settings) {
			return true;
		}
		return super.onOptionsItemSelected(item);
	}
	
	
	

	
}


