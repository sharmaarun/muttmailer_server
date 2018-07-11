#! /bin/bash
mutt -e "set content_type=text/html" -s "Your Loan Agreement Is Attached" $1 -a ~/$2 < ~/mailer/muttmailer_server/$3
