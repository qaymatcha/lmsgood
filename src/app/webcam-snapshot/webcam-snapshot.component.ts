import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import {FormControl} from "@angular/forms";
import {LoginService} from "../services/login.service";

@Component({
  selector: "app-webcam-snapshot",
  templateUrl: "./webcam-snapshot.component.html",
  styleUrls: ["./webcam-snapshot.component.scss"]
})

export class WebcamSnapshotComponent implements AfterViewInit {
  WIDTH = 640;
  HEIGHT = 480;

  @ViewChild("video")
  public video!: ElementRef;

  @ViewChild("canvas")
  public canvas!: ElementRef;

  captures: string[] = [];
  error: any;
  isCaptured!: boolean;
  identificationString = new FormControl('');
  loginError = false

  async ngAfterViewInit() {
    await this.setupDevices();
  }

  async setupDevices() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        if (stream) {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
          this.error = null;
        } else {
          this.error = "You have no output video device";
        }
      } catch (e) {
        this.error = e;
      }
    }
  }

    constructor(private router: Router, private loginService: LoginService){}

  capture() {
    this.drawImageToCanvas(this.video.nativeElement);

    this.loginService.login(this.identificationString.value,this.canvas.nativeElement.toDataURL("image/jpeg")).subscribe(res=>{
      localStorage.setItem("user", JSON.stringify(res));
      this.router.navigateByUrl('/dashboard');
    },error=>{
     this.loginError = true
    })

  }


  drawImageToCanvas(image: any) {
    this.canvas.nativeElement
      .getContext("2d")
      .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
  }
}
