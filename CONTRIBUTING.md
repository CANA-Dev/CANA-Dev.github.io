# Making Changes

Before making any changes, you must first assure that your GIT is properly setup. If you followed the instructions
above, you should now be able to open your Command Line on this folder, and use the command ```git fetch```, this will
make sure that your local repository is exactly the same as the remote one.

Once that is done, you should now prepare your local workspace, to do this open your Command Line on this folder, and
use the command ```git checkout -b {YOUR NAME}```, this will change what "branch" you are working on, and assure that
you don't change the live version of the widget.

From here, you may make whatever changes you'd like to make using Atom or Sublime Text. Always make sure you test your
changes by running the App locally!

Once your changes are complete, you need to "commit" and "push" them. To do this, re-open the Command Line on this
folder, and use the command ```git add *```, followed by ```git commit -m "{ADD A DESCRIPTION OF WHAT YOU DID}```.

At this point, there are two paths: if this is your first change, you'll need to run the following
command ```git push --set-upstream origin victor```. If you have made changes before, run this command ```git push```.
With this, your changes will now be on the GitHub Repository, in a branch under your name.

For more information/details regarding how GIT works, I advise
this [tutorial](https://www.atlassian.com/git/tutorials/what-is-version-control).

# Updating LIVE Version

This last bit is actually the easiest! So far, you should be able to see your changes on the live GIT Repository
[here](https://github.com/CANA-Dev/CANA-Dev.github.io), by clicking the button that says "main", it will display a
dropdown with all the possible branches, select the one with your name, and a popup should appear saying
"Contribute", click that text, and "Open pull request".

You should now write a quick blob over what changed, and why it did, and once you're done, click "Create Pull Request"
at the bottom.

You now need to wait for another CANA member to review the request (from the main CANA Info account), once they do that,
they will merge the changes, and you should see the widget update within a few minutes (or an hour at most after the
merge).

# Maintaining Branch Sanity

The GIT ecosystem can be quite complicated to understand, as Branches are non-linear, and merges can quickly create
exponential complication.

Although I'd love to explain the intricacies of the system, I think that would be counter-productive, so to clear things
up: always delete your remote & local branches after merging with "main", and re-create them the next time you're making
changes!

You can delete a remote branch using the GitHub website pretty easily:

1. Open the Origin Repo [here](https://github.com/CANA-Dev/CANA-Dev.github.io).
2. Click the Branch dropdown (where it says "main" or "{YOURNAME}").
3. Click "View all branches".
4. Find your branch on the list, and click the trashbin icon *(please make sure you don't delete "pages" or "main", that
   could break everything)*.

To delete your local Branch, make sure all changes have been pushed, and then open your Command Line on this folder and
run ```git checkout main```, followed by ```git branch -d {YOURNAME}```.

This will mean you'll need to recreate the branch every time, but dealing with complex mergers is significantly
harder... If you do want to learn more about this, I advise
this [tutorial](https://www.atlassian.com/git/tutorials/using-branches).

# Codebase Documentation

All the code on this folder is commented, but you can also see general indications in the DOCUMENTATION.md file.