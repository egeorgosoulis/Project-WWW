ΤΕΧΝΟΛΟΓΙΕΣ WWW
ΑΣΚΗΣΗ ΕΞΑΜΗΝΟΥ

Τίτλος : Βιογραφία του Αλέξανδρου Παπαδιαμάντη
Ονοματεπώνυμο : ΓΕΩΡΓΟΣΟΥΛΗΣ ΕΥΑΓΓΕΛΟΣ 
ΑΜ : 2120235
GitHub : https://github.com/egeorgosoulis/Project-WWW
Διεύθυνση ιστοτόπου : https://0vg8us.csb.app/ (μέσω Sandbox)
Στοιχεία : username = admin password = admin


ΣΥΝΟΠΤΙΚΗ ΠΕΡΙΓΡΑΦΗ
Αυτήν η ιστοσελίδα αναφέρεται στον Αλέξανδρο Παπαδιαμάντη όπως φαίνεται και από τον τίτλο της ιστοσελίδας καθώς και του header. Το κεντρικό μενού αποτελείται από διάφορα κουμπιά, το καθένα από τα οποία με διαφορετικές πληροφορίες για τον λογοτέχνη. Υπάρχει η επιλογή για εμφάνιση της βιογραφίας , φωτογραφιών , των έργων , κάποιων συνδέσμων με τα έργα του και η επιλογή για σύνδεση διαχειριστή και με την επιλογή οποιουδήποτε στο πλευρικό μενού εμφανίζονται επιπρόσθετες επιλογές με κατηγοριοποιημένες πληροφορίες για τον Π. για τις οποίες γίνεται εμφάνιση στην κύρια σελίδα του ιστοτόπου.
Με το πάτημα της Βιογραφίας εμφανίζεται ένα σετ κουμπιών με κατηγορίες σχετικά με πληροφορίες του Π. (Πρώιμη εποχή, συγγραφική του πορεία, τελευταία χρόνια).
Με το κουμπί των Φωτογραφιών εμφανίζεται σετ κουμπιών με κατηγοριοποιημένες φωτογραφίες του λογοτέχνη ,  σημειώσεις του καθώς και το σπίτι του το οποίο πλέον λειτουργεί σαν μουσείο.
Με την επιλογή των Έργων εμφανίζονται κάποια από τα έργα του, κατηγοριοποιημένα μέσω διαφορετικών κουμπιών του πλευρικού μενού.
Το κουμπί των Συνδέσμων εμφανίζει πάλι κατηγορίες έργων και στην κύρια σελίδα γίνεται η εμφάνιση τους μέσω πίνακα, στοιχισμένα με το όνομα και τον διαδικτυακό σύνδεσμο, οι οποίοι σύνδεσμοι οδηγούν σε εξωτερική σελίδα με το πλήρες περιεχόμενο των έργων.
Τέλος, υπάρχει και η επιλογή της Διαχείρισης με την οποία ο χρήστης μπορεί να κάνει σύνδεση και να εμφανιστούν κάποια εργαλεία διαχειριστή στο πλευρικό μενού (διαχείριση έργων/συνδέσμων ΔΕΝ ΔΟΥΛΕΥΟΥΝ) καθώς και η επιλογή της αποσύνδεσης.


ΕΠΕΞΗΓΗΣΗ
Στο html αρχείο ορίζω γλώσσα τα Ελληνικά, τίτλο, εικόνα στην καρτέλα και συνδέω όλα τα ξεχωριστά αρχεία css,js κλπ με το αρχικό html μέσα στο head.
Στο body ορίζω το grid (header, aside, nav, main, footer)και δημιουργώ στο καθένα ότι χρειάζεται.
Στο κεντρικό μενού δημιουργώ 5 κουμπιά ΒΙΟΓΡΑΦΙΑ ΦΩΤΟΓΡΑΦΙΕΣ ΕΡΓΑ ΣΥΝΔΕΣΜΟΙ ΚΑΙ ΔΙΑΧΕΙΡΗΣΗ.
Στο πλευρικό μενού δημιουργώ τα κουμπιά τα οποία είναι κρυμμένα και εμφανίζονται μόνο όταν πατηθεί το κατάλληλο κουμπί.
Η κύρια σελίδα εμφανίζει το περιεχόμενο του εκάστοτε button η οποία διαθέτει και scrollbar σε περίπτωση που δεν είναι αρκετός ο χώρος για την εμφάνιση περιεχομένου. Η βιογραφία και οι φωτογραφίες εμφανίζονται στατικά , ενώ τα έργα και οι σύνδεσμοι διαβάζονται δυναμικά από τα αρχεία json που περιέχουν τα έργα του λογοτέχνη. Οι φωτογραφίες επίσης εμφανίζονται μέσω flexbox .
Στην επιλογή της διαχείρισης εμφανίζεται το login form το οποίο με τα σωστά στοιχεία συνδέεται σαν διαχειριστής.
Στο αρχείο style.css ορίζω την μορφοποίηση της σελίδας καθώς και των τίτλων, των πινάκων και την εμφάνιση της σε διαφορετικές συσκευές. Ορίζω επίσης το grid-area και στο καθένα τι τοποθεσία και τι μέγεθος να έχουν.
Στο photos.css ορίζω τη γκαλερί με τις φωτογραφίες δηλαδή το flexbox και ορίζω και την κάθετη εμφάνιση τους.
Στο buttons.css ορίζω τι κάνει το hide και το reveal για να μπορέσω να το χρησιμοποιήσω για την εμφάνιση/απόκρυψη περιεχομένου. Φτιάχνω το wrapper1 το οποίο περιέχει όλα τα κουμπιά του κεντρικού μενού καθώς και το wrapper2 το οποίο βρίσκεται μέσα στο main area και προσθέτω το scrollbar. Στη συνέχεια ορίζω για κάθε κουμπί ξεχωριστά το χρώμα, το μέγεθος, την τοποθεσία των γραμμάτων και την αλλαγή χρώματος αν πάω με τον κέρσορα πάνω του.
Στο Login.js έχω δύο συναρτήσεις την checkCredentials και την logout. Η πρώτη ελέγχει αν τα στοιχεία που έχουν δοθεί στη φόρμα είναι σωστά και αν δεν είναι εμφανίζεται μήνυμα λάθους. Η δεύτερη λειτουργεί μόνο στην περίπτωση που πατηθεί το κουμπί Αποσύνδεση και στην ουσία αδειάζει την φόρμα και εμφανίζει πάλι το κουμπί της σύνδεσης, αποκρύπτοντας παράλληλα τα κουμπιά αποσύνδεση και διαχείριση έργων και συνδέσμων.
Στο Javascript αρχείο fetch χρησιμοποιείται αυτήν η μέθοδος για να διαβάσει δυναμικά τα έργα του Παπαδιαμάντη από τα αρχεία json και να τα βάλει σε σειρές έτσι ώστε να φτιάξει έναν συγκεντρωτικό πίνακα με τα ονόματα και τους συνδέσμους των έργων.
Στο buttons.js ορίζω τη λειτουργικότητα του κάθε κουμπιού με τη μέθοδο addEventListener και μέσω visible / hidden (που έχω ορίσει με css) εμφανίζω ή αποκρύπτω περιεχόμενο ανάλογα με το τι θέλω να εμφανίζει η main area.
Τέλος τα κατηγοριοποιημένα αρχεία json περιέχουν το καθένα έργα του λογοτέχνη και ανάλογα με το αρχείο fetch διαβάζει τι χρειάζεται. Για παράδειγμα στην επιλογή Έργα χρειάζεται μόνο το όνομα του έργου , οπότε διαβάζει μόνο τον τίτλο ενώ στους Συνδέσμους διαβάζεται και ο τίτλος και ο σύνδεσμος του έργου. 
Γενικά έχουν αξιοποιηθεί κώδικες των παραδειγμάτων της θεωρίας, οι φωτογραφίες εμφανίζονται με χρήση flexbox, οι πληροφορίες εμφανίζονται στατικά , τα έργα και οι σύνδεσμοι κατηγοριοποιούνται σε ομάδες και διαβάζονται δυναμικά από αρχεία json μέσω της μεθόδου fetch και εμφανίζονται με μορφή πίνακα. Από τη διαχείριση δουλεύει η σύνδεση και η αποσύνδεση  καθώς δεν μπόρεσα να υλοποιήσω την επεξεργασία των έργων και των συνδέσμων. Τέλος στο main area υπάρχει λειτουργικό scrollbar το οποίο κρατάει τη θέση του και δεν κάνει reset στο top position κάθε φορά που πατιέται κάποιο κουμπί. Δεν μπόρεσα να το κάνω να πάει πάνω σε κάθε αλλαγή οπότε το άφησα έτσι. Το αναφέρω αυτό διότι κάθε φορά που πατάω κάποιο νέο κουμπί πχ. Σύνδεσμοι πρέπει να σκρολάρω πάνω για να τα δω και ήταν αρκετές οι φορές που μπερδευόμουνα και νόμιζα ότι δεν εμφανιζόταν τίποτα, ενώ στην πραγματικότητα έπρεπε απλά να σύρω την μπάρα τέρμα πάνω.


ΕΜΦΑΝΙΣΗ ΙΣΤΟΣΕΛΙΔΑΣ 

LAPTOP - Δουλεύουν όλα ρολόι
             
MOBILE - Σε κινητό δεν δουλεύει σωστά, οι πληροφορίες εμφανίζονται κάτω από το grid

TABLET - Σε τάμπλετ δουλεύει μόνο όταν είναι σε πλάγια μορφή και γενικά η οθόνη πρέπει να είναι μεγάλη για να εμφανίζονται σωστά τα περιεχόμενα της main.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Τίτλος:
Εργασία 2022-23: Ανάπτυξη διαδικτυακής εφαρμογής με την βιογραφία και το έργο ενός λογοτέχνη 

Περιγραφή: 
Το θέμα της εργασίας του μαθήματος είναι η: "Ανάπτυξη διαδικτυακής εφαρμογής με την βιογραφία και το έργο ενός λογοτέχνη".
Η εφαρμογή μπορεί να είναι στα Ελληνικά ή Αγγλικά. Ο λογοτέχνης μπορεί να είναι οποιοδήποτε  Έλληνας ή ξένος λογοτέχνης της επιλογή σας.
Η διαδικτυακή εφαρμογή θα είναι εφαρμογή μίας σελίδας (Single Page Application) και το περιεχόμενο της θα αλλάζει δυναμικά.
Η εφαρμογή θα έχει τα παρακάτω χαρακτηριστικά:
•	Διάταξη (Layout) με Grid (παρόμοια με το παράδειγμα “ Σχεδίαση διάταξης σελίδας με Grid” της θεωρίας) η οποία θα αποτελείται από τα τμήματα header, nav, aside, main και footer
•	Το κεντρικό μενού (nav) στα πάνω μέρος της ιστοσελίδας με χρήση float θα παρουσιάζει τις επιλογές: 
o	Βιογραφία
o	Φωτογραφίες
o	Έργα
o	Σύνδεσμοι
o	Διαχείριση
•	Το περιεχόμενο του αριστερό πλευρικό μενού (aside) θα είναι στατικό, αλλά θα εμφανίζονται ή αποκρύπτονται τμήματα του ανάλογα με την επιλογή του κεντρικού μενού. Για κάθε επιλογή του κεντρικού μενού θα εμφανίζεται ένα προκαθορισμένο πλευρικό υπομενού (πχ. με την επιλογή «Συγγραφικό έργο» θα εμφανίζεται υπομενού με κατηγορίες έργων, με την επιλογή «Φωτογραφίες» θα εμφανίζεται υπομενού με διάφορες ομάδες φωτογραφιών κ.λπ.). 
o	Υπόδειξη: Το αριστερό μενού θα αποτελείται από διάφορα τμήματα (div) το οποία θα αποκρύπτονται ή θα εμφανίζονται ανάλογα με την επιλογή του κεντρικού μενού. Ορίστε και χρησιμοποιήστε κλάση css ή οποία αποκρύπτει (display:none) στοιχεία html την οποία θα προσθέτετε ή αφαιρείται δυναμικά στα στοιχεία που θέλετε να αποκρύψετε ή εμφανίσετε.    
•	Στο τμήμα main (κύριο τμήμα της σελίδα σας) θα εμφανίζονται ανάλογα την επιλογή του κυρίως μενού σε συνδυασμό με το πλευρικό μενού η βιογραφία, οι φωτογραφίες, τα έργα, οι σύνδεσμοι και η διαχείριση.
•	Η βιογραφία και οι φωτογραφίες θα έχουν στατικό περιεχόμενο το οποίο θα κατηγοριοποιείται σε διάφορες ομάδες η επιλογή των οποίων θα γίνεται από το πλευρικό μενού. Κάθε φορά στο τμήμα main θα εμφανίζεται η επιλεγμένη ομάδα την οποία θα επιλέγει ο χρήστης μέσω του κυρίως και του πλευρικού μενού
•	Οι φωτογραφίες θα εμφανίζονται με την χρήση flex box.
•	Τα έργα και οι σύνδεσμοι θα κατηγοριοποιούνται σε ομάδες και θα διαβάζονται δυναμικά από τον εξυπηρετητή. Για παράδειγμα οι σύνδεσμοι μπορεί να ταξινομούνται σε βιβλιογραφία, παραπομπές, διαδικτυακούς συνδέσμους κ.λπ. Όταν ο χρήστης επιλέξει κάποια συγκεκριμένη ομάδα, με την χρήση της μεθόδου fetch θα διαβάζονται οι αντίστοιχοι σύνδεσμοι σε μορφή JSON ή XML και θα εμφανίζονται σε μορφή πίνακα στο τμήμα main.   
•	Με την επιλογή διαχείριση θα εμφανίζονται στο πλευρικό μενού οι επιλογές: 
o	Σύνδεση: 
	Μέσω κατάλληλης φόρμας θα γίνεται η επαλήθευση των στοιχείων του χρήστη και η είσοδος του στην διαχείριση
o	Αποσύνδεση: 
	Αποσύνδεση από την εφαρμογή
o	Διαχείριση Έργων (μόνον όταν έχει γίνει σύνδεση διαχειριστή) 
	Πρόσθεση, αλλαγή και διαχείριση έργων
o	Διαχείριση συνδέσμων (μόνον όταν έχει γίνει σύνδεση διαχειριστή) 
	Πρόσθεση, αλλαγή και διαχείριση συνδέσμων
•	Ο εξυπηρετητής θα είναι υλοποιημένος με node.js  - express και θα έχει τις παρακάτω δυνατότητες: 
o	Εξυπηρέτηση στατικών σελίδων, εικόνων και περιεχομένου 
	Η ιστοσελίδα, οι φωτογραφίες και τα στατικό περιεχόμενο θα εξυπηρετούνται με την χρήση του express.js
o	Έλεγχος εισόδου χρηστών 
	Υπόδειξη: Χρησιμοποιήσετε κάποια από τις μεθόδους authentication που περιγράφονται στις διαφάνειες του μαθήματος
o	CRUD Rest API Service για Έργα 
	Τα έργα θα αποθηκεύονται και θα διαβάζονται από αρχεία JSON ή XML
o	CRUD Rest API Service Service για Συνδέσμους 
	Οι σύνδεσμοι θα αποθηκεύονται σε βάση δεδομένων της επιλογή σας
Η εργασία θα χρησιμοποιεί τις παρακάτω Τεχνολογίες διαδικτύου:
•	HTML
•	CSS
•	Javascript
•	Nodejs
•	Express
•	SPA
•	JSON ή XML
•	MongoDB, Postgres, MySQL, κ.λπ.
•	Web Services
Η εφαρμογή θα χρησιμοποιεί Responsive Wed Design και θα σχεδιασθεί για χρήση από  Desktop, Tablet και κινητό.
Αποφύγετε να χρησιμοποιήσετε έτοιμες βιβλιοθήκες, templates, css, και άλλες τεχνολογίες εκτός από αυτές που έχετε διδαχθεί στα πλαίσια του μαθήματος. 
Η εφαρμογή σας θα αποθηκευτεί σε repository που θα δημιουργήσετε στο github (με δικό σας όνομα χρήστη ) και θα αναρτηθεί στο διαδίκτυο με τεχνολογία / υποδομή που θα επιλέξετε (π.χ. με codesandbox, cycli.sh, vercel.com κ.λπ.).
Μην δημοσιοποιήσετε την διεύθυνση github, την διεύθυνση του ιστότοπου σας και τμήματα του προγράμματος σας.
Η εργασία θα παραδοθεί σε ένα ενιαίο αρχείο word.
Η πρώτη σελίδα της εργασία σας θα περιλαμβάνει:
•	Το τίτλο της εργασίας.
•	Το ονοματεπώνυμο και τον αριθμό μητρώου σας.
•	Τη διεύθυνση github με τον κώδικα και το αρχεία της εφαρμογή σας.
•	Τη διεύθυνση του ιστοτόπου της εφαρμογή σας.
•	Το όνομα χρήστη και τον κωδικό για την είσοδο στην διαχείριση της εφαρμογής σας.
Η εργασία θα αποτελείται:
•	Συνοπτική περιγραφή της εφαρμογής.
•	Επεξηγήσεις του τρόπου που υλοποιήσατε την εφαρμογή σας (πχ. μορφοποίηση, διάταξη ιστοσελίδας, δυναμική εμφάνιση / απόκρυψη τμημάτων, web services, βάση δεδομένων, πίνακες ή αρχεία δεδομένων).
•	Όλες τις ιστοσελίδες της εργασίας σας, ξεχωριστά για desktop, tablet και κινητό (χρησιμοποιήστε αντιγραφή της οθόνης του browser για την κάθε ιστοσελίδα και επικολλήστε τη στο αρχείο word).
•	Παράρτημα αποτελούμενο από τα διάφορα αρχεία html, css, javascript κ.λπ. της εφαρμογής σας.
Η εργασία διαμορφώνει το 30% της τελικής βαθμολογίας ενώ η  γραπτή εξέταση, σε οποιοδήποτε εξεταστική περίοδο εξεταστείτε, διαμορφώνει το 70% του τελικού βαθμού.
Εάν δεν παραδώσετε την εργασία σας εντός της προβλεπόμενης προθεσμίας, θα μπορείτε να πάρετε μέρος στην γραπτή εξέταση για το 70% του τελικού βαθμού, αλλά θα μηδενισθείτε για το υπόλοιπο 30% του τελικού βαθμού που αντιστοιχεί στην εργασία σας.
