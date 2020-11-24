## Pre-requiaites

## Create GitHub Account

#### Head over to www.github.com and sign up

<img src='img/githubhome.png'/>  

## Download And Install Git


#### Head to https://git-scm.com/downloads and pick your machine OS (Operating System). once the download is complete, double click the executable on the bottom left of the page
###
<img src='img/gitdwnld.png' />    

#### The installer will pop up and click next
<img src='img/gitinstproc.png' />   

#### Click Next

<img src='img/gitinstproc2.png' />

#### Click Next
<img src='img/gitinstproc3.png' />  

#### Click Next
<img src='img/gitinstproc4.png' />  

#### Click Next
<img src='img/gitinstproc5.png' />  

#### Click Next
<img src='img/gitinstproc6.png' />  

#### Click Next
<img src='img/gitinstproc7.png' />  

#### Click Next
<img src='img/gitinstproc8.png' />  

#### Click Next
<img src='img/gitinstproc9.png' />  

#### Click Next
<img src='img/gitinstproc10.png' />  

#### Click Next
<img src='img/gitinstproc11.png' />  

#### Click Next
<img src='img/gitinstproc12.png' />  

#### Click Install
<img src='img/gitinstprocfinish.png' />


## Download And Install Node.js

#### Go to https://nodejs.org/en/download/ and download the appropriate version of for your OS
######

<img src='img/nodejs.png' />  

#### Click Next

<img src='img/nodejsinstproc.png' />  

#### Click Next

<img src='img/nodejsinstproc2.png' />  

#### Click Next

<img src='img/nodejsinstproc3.png' />  

#### Click Next

<img src='img/nodejsinstproc4.png' />  

#### Click Next

<img src='img/nodejsinstproc5.png' />  

#### Click Install

<img src='img/nodejsinstproc6.png' />  

#### Click Finish

<img src='img/nodejsinstproc7.png' />


## Download And Install Microsoft Visual Studio Code

#### You can get Microsoft Visual Studio from https://code.visualstudio.com/download
###

<img src='img/vscodedwnload.png' />  

#### Click Next

<img src='img/vscodeinstproc.png' />  

#### Click Next

<img src='img/vscodeinstproc2.png' />  

#### Click Install

<img src='img/vscodeinstproc3.png' />

#### Click Finish

<img src='img/vscodeinstproc4.png' />


## Clone The Repository

#### Once you have your GitHub account, go to the njinius repository at https://github.com/njinius/njinius. Click on the "Code" button and copy the URL. 

<img src='img/njingit.png' />

#### Create an empty folder where you would like the repository to be. Click on the address bar and type in "cmd" then hit enter

<img src='img/cmdaddbar.png' />     	

#### The terminal will pop up, type "git clone", then paste the command you copied above and hit enter


<img src='img/gitclnecmd.png' />

#### When its complete, open Visual Studio Code and click on the explorer button boxed in green below

<img src='img/vscodeopfold.png' />

#### The file explorer will pop up, navigate to the folder where you cloned the repository into then clock "select Folder"

<img src='img/vscodefolder.png' />

#### On the left sidebar, you will see the folder structure similar to the one shown below

<img src='img/vscodegetstarted.png' />


## Create and Publish Your Branch

#### You will need to create your own branch to work on, so start by clicking on "Terminal", then on the dropdown list, click "New Terminal"
<img src='img/vscodenewterm.png' />

#### A new terminal will pop up at the bottom. To create your branch, type the command "git checkout -b [yourbanchname]" as underlined in green below, where "yourbranchname" is whatever you'd like to call your branch. Once on your branch, click on the cloud with an arrow, similar to the one boxed in red below. This will publish your branch onto the repository on GitHub
<img src='img/vscodepublishbranch.png' />

#### Once all that is done, run the command "yarn install"
<img src='img/yarninstall.png' />

#### Then run the command "npm install"
<img src='img/npminstall.png' />

#### Finally, run the command "yarn start"
<img src='img/yarnstart.png' />

#### the site will start to compile, when complete, it will auto-launch on the address underlined in red below. If it doesn't auto-launch however, then just copy the localhost address into your browser's address bar. Now you can get to work making changes and preview them at that address
<img src='img/localhost.png' />

## Commit and Push Changes

#### As you make changes, they will be tracked. To see the changes, click the source control button boxed in red below. If you are happy with your changes, you can commit them so you don't lose them. Before you commit, however, you need a commit message summerizing your changes, you can type this in the box underlined in green below then clock the tick boxed in blue
<img src='img/chngencomit.png' />

#### Once committed, click the three dots, boxed in blue below, then click "Push" in the dropdown menu. this will then send those changes to your GitHub branch

<img src='img/vscodepush.png' />


## Create And Submit Pull Request

#### To get your changes onto the website, you need to get them reviewed first via pull request. To do this, you go on the GitHub repository, click on main, and either select or search for then select your branch.

<img src='img/yourbranchgit.png' />

#### You will then be taken to your branch, click on "Pull request", underlined in blue below

<img src='img/pullrequest.png' />

#### On the pull request page, you ender the pull request title, then just under that, you enter the description or detail of the changes made. Once you're happy with that, click "Create pull request", underlined in red below

<img src='img/pullrequestreveiw.png' />

#### Success, your pull request has been created and shall be reviewed by the Njinius team and if alls well reflected on the website

<img src='img/pullrequestfinal.png' />
