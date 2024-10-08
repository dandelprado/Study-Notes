# wget

`wget`
: command line application that lets you download files, folders, or entired websites.
: allows to retrieve files from the internet using _HTTP_, _HTTPS_, and _FTP_ protocols.

## Usage Example

1. `wget https://en.wikipedia.org/wiki/Dog`
: only loads the specific webpage and not any other files that might be needed by the webpage.
: grabs whatever it can grab from the specific page provided

_Adding command line parameter changes the behavior of `wget`_

2. `wget https://en.wikipedia.org/wiki/Dog --page-requisites`
: downloading a webpage including all its prerequisites
: supposed to download all the pieces of the page to make it look like the exact page

_Adding an extra parameter to the `wget` command to find the error_

3. `wget https://en.wikipedia.org/wiki/Dog --page-requisites --rejected-log=rejects.log`
: `--rejected-log` parameter allows `wget` to log all URL rejections to the specified logfile(_rejects.log_)

4. `wget https://en.wikipedia.org/wiki/Dog --page-requisites --span-hosts`
: `--span-hosts` parameter allows wget to follow links that are on a different domain

5. `wget https://en.wikipedia.org/wiki/Dog --page-requisites --span-hosts --convert-links`
: `--convert-links` parameter converts the links in downloaded files to make them suitable for local viewing

#### **TIPS**

- Can create a shell script (_.sh_) when using wget for easier modification of the command line prompt. 
- Can break a single command line by using a back slach key at the end of each parameter followed by a new line.
- When executing a shell script and it gets denied, check if it's executable (`ls -l`). _rw-rw-r--` means it's permission is read-write for owner, read-write for group, and read-only for everyone else. 
- `chmod +x ./scriptName.sh` to be able to execute
```
wget https://en.wikipedia.org/wiki/Dog \
--page-requisites \
--span-hosts \
--convert-links \
--recursive \
--level=inf \
--no-parent \
--wait=2 \
--limit-rate=1024k
```

### Shortened Version of the above command (activity)

```
wget https://wiki.hackzine.org -p -k -r \
--l inf -np
```

`man wget`
: read the manual for wget

- `--page-requisite` or `-p`
: download all the files necessary to properly display a given HTML page

- `--recursive` or `-r`
: turn on recursive retrieving; default maximum depth is 5

- `--level=inf` or `l inf`
: specify maximum depth

- `--no-parent` or `'-np`
: do not ascend to parent directory when retrieving recursively

##### wget etiquette
1. `--wait=2` or `-w seconds`
: wait the specified # of seconds between the retrievals

2. `--limit-rate=1024k`
: limit the download speed to amount bytes per second


