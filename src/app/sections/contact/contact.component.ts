import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconComponent } from '../../shared/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { I18nService } from '../../core/i18n/i18n.service';

type FormStatus = 'idle' | 'sending' | 'sent';
type FieldName = 'name' | 'email' | 'subject' | 'message';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, SectionHeadingComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly document = inject(DOCUMENT);
  private readonly i18n = inject(I18nService);

  readonly content = this.i18n.content;
  readonly status = signal<FormStatus>('idle');
  readonly copied = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  get f() {
    return this.form.controls;
  }

  isInvalid(control: FieldName): boolean {
    const field = this.form.controls[control];
    return field.invalid && (field.dirty || field.touched);
  }

  errorFor(control: FieldName): string {
    const errors = this.content().ui.contact;
    switch (control) {
      case 'name':
        return errors.nameError;
      case 'email':
        return errors.emailError;
      case 'subject':
        return errors.subjectError;
      default:
        return errors.messageError;
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');

    // No backend is wired up: swap this block for a real HTTP call when ready.
    console.info('[contact] message ready to send', this.form.getRawValue());

    setTimeout(() => {
      this.status.set('sent');
      this.form.reset();
      setTimeout(() => this.status.set('idle'), 5000);
    }, 900);
  }

  async copyEmail(): Promise<void> {
    const clipboard = this.document.defaultView?.navigator?.clipboard;
    try {
      await clipboard?.writeText(this.content().profile.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      this.copied.set(false);
    }
  }
}
