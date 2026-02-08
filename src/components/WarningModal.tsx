import { useState } from 'react';

const NEW_DOMAIN = 'https://darelom-students.netlify.app';
const STORAGE_KEY = 'warningModalDismissed';

const pulseKeyframes = `
@keyframes pulseRing {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}
@keyframes pulseRing2 {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(2.2);
    opacity: 0;
  }
}
`;

export default function WarningModal() {
  const [isVisible, setIsVisible] = useState(() => {
    return !sessionStorage.getItem(STORAGE_KEY);
  });

  const handleDismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true');
    setIsVisible(false);
  };

  const handleGoToNewSite = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true');
    window.location.href = NEW_DOMAIN;
  };

  return (
    <>
      <style>{pulseKeyframes}</style>

      {/* Floating circle button – bottom right */}
      {!isVisible && (
        <div
          style={{
            position: 'fixed',
            bottom: '1.25rem',
            right: '1.25rem',
            width: '54px',
            height: '54px',
            zIndex: 1055,
          }}
        >
          {/* Outer ring 1 */}
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '3px solid rgba(220, 53, 69, 0.6)',
              animation: 'pulseRing 1.5s ease-out infinite',
            }}
          />
          {/* Outer ring 2 (delayed) */}
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '3px solid rgba(220, 53, 69, 0.4)',
              animation: 'pulseRing2 1.5s ease-out 0.4s infinite',
            }}
          />
          <button
            onClick={() => setIsVisible(true)}
            className="btn btn-danger rounded-circle shadow d-flex align-items-center justify-content-center"
            style={{
              position: 'relative',
              width: '54px',
              height: '54px',
              fontSize: '1.5rem',
              lineHeight: 1,
              paddingTop: '2px',
              zIndex: 1,
            }}
            title="تنبيه تغيير العنوان"
          >
            ⚠️
          </button>
        </div>
      )}

      {/* Modal */}
      {isVisible && (
        <div
          className="modal d-block bg-black bg-opacity-75"
          tabIndex={-1}
          style={{ zIndex: 1060 }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-danger border-2" dir="rtl">
              <div className="modal-header bg-danger bg-opacity-10 border-danger">
                <h5 className="modal-title text-center w-100 text-danger fw-bold">⚠️ تنبيه هام</h5>
              </div>

              <div className="modal-body text-center py-4">
                <p className="fw-bold mb-3" style={{ fontSize: '1.1rem' }}>
                  سيتم نقل المنصة إلى عنوان جديد قريبًا -إن شاء الله-.
                </p>
                <p className="mb-3">
                  يرجى العلم أن هذا العنوان سيتم الاستغناء عنه، وسيتم نقل جميع الخدمات إلى العنوان
                  الجديد:
                </p>
                <a
                  href={NEW_DOMAIN}
                  className="d-inline-block bg-light rounded px-3 py-2 fw-bold text-primary"
                  style={{ fontSize: '1.05rem', wordBreak: 'break-all' }}
                >
                  {NEW_DOMAIN}
                </a>

                <p className="mt-4 text-danger">
                  آخر تحديث لبيانات النتائج: الفصل الدراسي الثاني 2025.
                </p>
              </div>

              <div className="modal-footer border-0 pt-0 d-flex justify-content-center gap-2">
                <button className="btn btn-primary fw-bold px-4" onClick={handleDismiss}>
                  متابعة هنا
                </button>
                <button className="btn btn-success fw-bold px-4" onClick={handleGoToNewSite}>
                  الانتقال للموقع الجديد
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
