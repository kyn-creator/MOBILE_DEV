<font color="#0e88f1"><h1 align="center">Commit Changes</h1></font>



<font color="#d22d44"><h1 align="center">Installation and Configuration Guide</h1></font>

**Github Linking**
```
git init
git add .
git commit -m "commit message here"
git branch -M main
git remote add origin https://github.com/StarMysteries/sample.git     //sample.git is replaced with repository url 
git push -u origin main
```

<br/><br/>

**Update Code Repository with new Commit Stage**

*Note: This is recommended if you are not sure how to update the code in the repository*
```
git add .
git commit -m "commit message here"
git push
// or if in another branch:
// git push origin branch_name_here
```

<br/><br/>

**Update latest Commit Stage in the Code Repository**

*Note: DO NOT USE THIS IF YOU ARE NOT SURE WHETHER YOU WANT TO REPLACE EXISTING CODE OR NOT, UPDATE CODE REPOSITORY ***WITH NEW STAGE*** IF THIS IS THE CASE.*
```
git add .
git commit --amend --no-edit
// or..
// git commit --amend -m "new commit message"
// ..to update commit message
git push --force
// or if in another branch:
// git push origin branch_name_here --force
```

<br/><br/>

