CU-LiNK
=======
A static website built for <a href="http://columbia.edu/cu/culink" target="_blank">Columbia University Liberty in North Korea (CU LiNK)</a> using Middleman and Bootstrap. It is fully responsive to enable optimized view in multiple devices.

Implementation
----------------
I decided to build the website using <a href="http://middlemanapp.com/" target="_blank">Middleman</a> so that it can be hosted on <a href="http://columbia.edu/" target="_blank">Columbia University</a> website. Middleman is a Ruby framework for creating static websites.
Although this website itself is static, I've added Facebook API to retrieve photos and posts from CU LiNK's official Facebook page to avoid having to double-post. Facebook Connect extension must be enabled for this to work.

For the styling, I used Bootstrap and Font Awesome as well as custom css.

Website Design
-----------------
I tried to follow Liberty in North Korea's <a href="http://www.libertyinnorthkorea.org/" target="_blank">official website</a>. Main color is therefore red and white, which gives the feeling of love and warmth.

For the main page, I added a collage of the club photos at the top. I also added short descriptions and quick links to About, Events and News page to allow the users to easily navigate through the website.
![Main page](https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-prn1/t31.0-8/10317703_10152113025242852_3008387023862372902_o.jpg)

Content Management
-----------------
Content for members page and events page are managed by creating a yaml data files in "data" folder. 
For example, in "data/members.yml" file, I have:
<pre><code>exec:
- name: James Hyunseung Hong
  position: Treasurer
  description: B. S. in Computer Engineering, SEAS'16
  image: img/members/jameshong.jpg</code></pre>

This makes it easy to build the database of the content and add to the template.
The resulting HTML content looks as follows:
![Members page](https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-frc3/t31.0-8/1800156_10152113111787852_3544367600570938127_o.jpg)

<b>in order to generate the HTML files, middleman must be installed in the system.</b>
To build files, simply type:
<pre><code>bundle exec middleman build</code></pre>
