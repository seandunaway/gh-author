# gh-author

fetch the github user's **public** attribution information


### install
`$ npm install -g @seandunaway/gh-author`


### usage
```
$ gh-author
usage: [-c|--co-authored-by] <username>
```

```
$ gh-author -c visionmedia | pbcopy
Co-authored-by: Sloth <9285253+visionmedia@users.noreply.github.com>
```

```
$ git commit -am "responsive; ty tj!

$(gh-author -c visionmedia)"
[main 644f46c] responsive; ty tj!
 1 file changed, 5 insertions(+), 1 deletion(-)

$ git show
commit 644f46c8adcdbbaa4411c503cb3e976f443e7dd1 (HEAD -> main)
Author: seandunaway <768948+seandunaway@users.noreply.github.com>
Date:   Sat Jul 8 08:23:54 2023 -0700
    responsive; ty tj!

    Co-authored-by: Sloth <9285253+visionmedia@users.noreply.github.com>
```
