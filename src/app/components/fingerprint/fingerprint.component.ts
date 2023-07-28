import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.scss'],
})
export class FingerprintComponent implements OnInit {
  constructor(private fingerprintAIO: FingerprintAIO) {}

  ngOnInit() {
    this.fingerprintAIO
      .show({
        title: 'Huella titulo',
        subtitle: 'Huella subtitulo',
        description: 'Huella descripcion',
        disableBackup: true,
        fallbackButtonTitle: 'fallbackButtonTitle',
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    this.fingerprintAIO.registerBiometricSecret;
  }

  public showFingerprintAuthDlg() {
    this.fingerprintAIO
      .isAvailable()
      .then((result: any) => {
        console.log(result);

        this.fingerprintAIO
          .show({
            cancelButtonTitle: 'Cancel',
            description: 'Some biometric description',
            disableBackup: true,
            title: 'Scanner Title',
            fallbackButtonTitle: 'FB Back Button',
            subtitle: 'This SubTitle',
          })
          .then((result: any) => {
            console.log(result);
            alert('Successfully Authenticated!');
          })
          .catch((error: any) => {
            console.log(error);
            alert('Match not found!');
          });
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
